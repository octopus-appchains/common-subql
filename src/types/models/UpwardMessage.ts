// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type UpwardMessageProps = Omit<UpwardMessage, NonNullable<FunctionPropertyNames<UpwardMessage>>| '_name'>;

export class UpwardMessage implements Entity {

    constructor(
        
            id: string,
        
        
        
        
        
        
    ) {
        
            this.id = id;
        
    }


    public id: string;

    public sequence?: number;

    public payloadType?: string;

    public payload?: string;

    public timestamp?: Date;

    public blockId?: string;


    get _name(): string {
        return 'UpwardMessage';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save UpwardMessage entity without an ID");
        await store.set('UpwardMessage', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove UpwardMessage entity without an ID");
        await store.remove('UpwardMessage', id.toString());
    }

    static async get(id:string): Promise<UpwardMessage | undefined>{
        assert((id !== null && id !== undefined), "Cannot get UpwardMessage entity without an ID");
        const record = await store.get('UpwardMessage', id.toString());
        if (record){
            return this.create(record as UpwardMessageProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<UpwardMessage[] | undefined>{
      
      const records = await store.getByField('UpwardMessage', 'sequence', sequence);
      return records.map(record => this.create(record as UpwardMessageProps));
      
    }

    static async getByPayloadType(payloadType: string): Promise<UpwardMessage[] | undefined>{
      
      const records = await store.getByField('UpwardMessage', 'payloadType', payloadType);
      return records.map(record => this.create(record as UpwardMessageProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<UpwardMessage[] | undefined>{
      
      const records = await store.getByField('UpwardMessage', 'timestamp', timestamp);
      return records.map(record => this.create(record as UpwardMessageProps));
      
    }

    static async getByBlockId(blockId: string): Promise<UpwardMessage[] | undefined>{
      
      const records = await store.getByField('UpwardMessage', 'blockId', blockId);
      return records.map(record => this.create(record as UpwardMessageProps));
      
    }


    static create(record: UpwardMessageProps): UpwardMessage {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        );
        Object.assign(entity,record);
        return entity;
    }
}
