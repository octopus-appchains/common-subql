// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type EraEventProps = Omit<EraEvent, NonNullable<FunctionPropertyNames<EraEvent>>>;

export class EraEvent implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public sequence?: number;

    public bridgeMessageEventId?: string;

    public eventType?: string;

    public eraIndex?: number;

    public timestamp?: Date;

    public blockId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save EraEvent entity without an ID");
        await store.set('EraEvent', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove EraEvent entity without an ID");
        await store.remove('EraEvent', id.toString());
    }

    static async get(id:string): Promise<EraEvent | undefined>{
        assert((id !== null && id !== undefined), "Cannot get EraEvent entity without an ID");
        const record = await store.get('EraEvent', id.toString());
        if (record){
            return this.create(record as EraEventProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'sequence', sequence);
      return records.map(record => this.create(record as EraEventProps));
      
    }

    static async getByBridgeMessageEventId(bridgeMessageEventId: string): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'bridgeMessageEventId', bridgeMessageEventId);
      return records.map(record => this.create(record as EraEventProps));
      
    }

    static async getByEventType(eventType: string): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'eventType', eventType);
      return records.map(record => this.create(record as EraEventProps));
      
    }

    static async getByEraIndex(eraIndex: number): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'eraIndex', eraIndex);
      return records.map(record => this.create(record as EraEventProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'timestamp', timestamp);
      return records.map(record => this.create(record as EraEventProps));
      
    }

    static async getByBlockId(blockId: string): Promise<EraEvent[] | undefined>{
      
      const records = await store.getByField('EraEvent', 'blockId', blockId);
      return records.map(record => this.create(record as EraEventProps));
      
    }


    static create(record: EraEventProps): EraEvent {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
