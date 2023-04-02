import { RowID, RowElement } from "./interface";

export declare function insertRow(row: RowElement): number;
export declare function deleteRow(row: RowID): void;
export declare function updateRow(RowID: RowID, row: RowElement): number;

// declare module "module" {
// 	export function insertRow(row: RowElement): number;
// 	export function deleteRow(row: RowID): void;
// 	export function updateRow(RowID: RowID, row: RowElement): RowID;
// }
