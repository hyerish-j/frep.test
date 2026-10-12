export type Numeric = string | number;
export type Channel = '매장' | '포장';
export interface Meta {dataset_id:string; version:string; data_class:string; store_name:string; start_date:string; as_of:string; currency:string; amount_basis:string; source:string; seed?:Numeric}
export interface Supplier {supplier_id:string; name:string}
export interface Material {material_id:string; name:string; unit:string; supplier_id:string; pack_quantity:Numeric}
export interface Menu {menu_id:string; name:string; category:string; price:Numeric; recipe_version:string}
export interface Recipe {menu_id:string; recipe_version:string; material_id:string; quantity:Numeric; unit:string; channel_only?:string}
export interface Price {material_id:string; effective_date:string; pack_price:Numeric; pack_quantity:Numeric}
export interface CalendarDay {date:string; is_open:boolean; record_complete:boolean}
export interface Sale {sale_id:string; date:string; menu_id:string; channel:Channel; quantity:Numeric; unit_price:Numeric; discount_amount:Numeric; net_sales:Numeric; payment_fee:Numeric|null; recipe_version:string; unit_food_cost_snapshot:Numeric|null; unit_packaging_cost_snapshot:Numeric|null}
export interface Opening {material_id:string; date:string; quantity:Numeric; unit:string}
export interface InventoryEvent {event_id:string; material_id:string; date:string; event_type:string; quantity:Numeric; unit:string; counted_quantity?:Numeric|null; reason?:string}
export interface Expense {expense_id:string; date:string; category:string; amount:Numeric}
export interface MonthlyPlan {month:string; category:string; amount:Numeric}
export interface Data {meta:Meta; suppliers:Supplier[]; materials:Material[]; menus:Menu[]; recipes:Recipe[]; price_history:Price[]; calendar:CalendarDay[]; sales:Sale[]; opening_inventory:Opening[]; inventory_events:InventoryEvent[]; expenses:Expense[]; monthly_expense_plan:MonthlyPlan[]; settings:Record<string,unknown>; dirtyDates:string[]; revision:number; issues:string[]}
export interface SaleInput {date:string; menu_id:string; channel:Channel; quantity:string; unit_price:string; discount_amount:string; payment_fee:string}
export interface Period {mode:'day'|'month'; value:string}
