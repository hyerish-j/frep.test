import 'fake-indexeddb/auto';
import {afterEach,beforeEach,describe,it,expect} from 'vitest';
import {CafeDB,initialize,readData,saveSale,deleteSale} from '../src/data/database';
import {fixture,input} from './fixture';
let database:CafeDB;
beforeEach(()=>{database=new CafeDB('test-'+crypto.randomUUID());});
afterEach(async()=>{await database.delete();});
describe('실제 IndexedDB 저장 규칙',()=>{
 it('시작 자료는 한번만 반영, 기존 작업 우선',async()=>{await initialize(database,fixture());await saveSale(database,input(),0);await initialize(database,fixture());const d=await readData(database);expect(d.sales).toHaveLength(1);expect(d.revision).toBe(1);expect(d.dirtyDates).toEqual(['2025-07-01']);});
 it('등록·수정·삭제가 재접속 후에도 유지',async()=>{await initialize(database,fixture());let d=await saveSale(database,input(),0);const id=d.sales[0].sale_id;d=await saveSale(database,input({quantity:'20'}),1,id);database.close();await database.open();d=await readData(database);expect(d.sales[0].quantity).toBe('20');expect(d.sales[0].unit_food_cost_snapshot).toBe('460');await deleteSale(database,id,2);expect((await readData(database)).sales).toHaveLength(0);});
 it('저장 도중 실패는 기록·잠정 상태·변경 번호 전체 취소',async()=>{await initialize(database,fixture());await expect(saveSale(database,input(),0,undefined,true)).rejects.toThrow();const d=await readData(database);expect(d.sales).toHaveLength(0);expect(d.dirtyDates).toHaveLength(0);expect(d.revision).toBe(0);});
 it('삭제 도중 실패도 전체 취소',async()=>{await initialize(database,fixture());const d=await saveSale(database,input(),0);await expect(deleteSale(database,d.sales[0].sale_id,1,true)).rejects.toThrow();expect((await readData(database)).sales).toHaveLength(1);expect((await readData(database)).revision).toBe(1);});
 it('오래된 창 변경 번호와 중복 요청 차단',async()=>{await initialize(database,fixture());await saveSale(database,input(),0);await expect(saveSale(database,input({date:'2025-07-02'}),0)).rejects.toThrow('다른 창');await expect(saveSale(database,input(),1)).rejects.toThrow('같은 날짜');});
 it('동시 저장 중 하나만 성공',async()=>{await initialize(database,fixture());const result=await Promise.allSettled([saveSale(database,input(),0),saveSale(database,input(),0)]);expect(result.filter(r=>r.status==='fulfilled')).toHaveLength(1);expect((await readData(database)).sales).toHaveLength(1);});
 it('불완전한 DB에 샘플을 덮어쓰지 않는다',async()=>{await database.table('menus').add({__key:'M99',name:'기존 자료'});await expect(initialize(database,fixture())).rejects.toThrow('불완전');expect(await database.table('menus').count()).toBe(1);});
 it('중복 원자료를 자동 합치지 않고 문제 보존',async()=>{const d=fixture();const a=await import('./fixture');d.sales=[a.sale(),a.sale({sale_id:'S02'})];await initialize(database,d);const read=await readData(database);expect(read.sales).toHaveLength(0);expect(read.issues).toHaveLength(2);expect(await database.sourceIssues.count()).toBe(2);});
});
