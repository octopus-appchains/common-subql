// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type BridgeMessageEventProps = Omit<BridgeMessageEvent, NonNullable<FunctionPropertyNames<BridgeMessageEvent>>>;

export class BridgeMessageEvent implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public sequence?: number;

    public eventType?: string;

    public timestamp?: Date;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save BridgeMessageEvent entity without an ID");
        await store.set('BridgeMessageEvent', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove BridgeMessageEvent entity without an ID");
        await store.remove('BridgeMessageEvent', id.toString());
    }

    static async get(id:string): Promise<BridgeMessageEvent | undefined>{
        assert((id !== null && id !== undefined), "Cannot get BridgeMessageEvent entity without an ID");
        const record = await store.get('BridgeMessageEvent', id.toString());
        if (record){
            return this.create(record as BridgeMessageEventProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<BridgeMessageEvent[] | undefined>{
      
      const records = await store.getByField('BridgeMessageEvent', 'sequence', sequence);
      return records.map(record => this.create(record as BridgeMessageEventProps));
      
    }

    static async getByEventType(eventType: string): Promise<BridgeMessageEvent[] | undefined>{
      
      const records = await store.getByField('BridgeMessageEvent', 'eventType', eventType);
      return records.map(record => this.create(record as BridgeMessageEventProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<BridgeMessageEvent[] | undefined>{
      
      const records = await store.getByField('BridgeMessageEvent', 'timestamp', timestamp);
      return records.map(record => this.create(record as BridgeMessageEventProps));
      
    }

    static async getByBlockId(blockId: string): Promise<BridgeMessageEvent[] | undefined>{
      
      const records = await store.getByField('BridgeMessageEvent', 'blockId', blockId);
      return records.map(record => this.create(record as BridgeMessageEventProps));
      
    }


    static create(record: BridgeMessageEventProps): BridgeMessageEvent {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
