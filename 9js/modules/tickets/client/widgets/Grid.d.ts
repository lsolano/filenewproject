export interface GridTypeConstructor {
    new (args: any): GridType;
}
export interface GridType {
}
export interface MemoryConstructor {
    new (args: any): MemoryInstance;
}
export interface MemoryInstance {
    setData(args: any[]): void;
}
export declare var Memory: MemoryConstructor;
declare let Grid: GridTypeConstructor;
export default Grid;
