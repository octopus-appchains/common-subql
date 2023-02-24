// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type CallProps = Omit<Call, NonNullable<FunctionPropertyNames<Call>>>;

export class Call implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public section?: string;

    public method?: string;

    public args?: string;

    public timestamp?: Date;

    public isSuccess?: boolean;

    public signerId?: string;

    public extrinsicId?: string;

    public parentCallId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Call entity without an ID");
        await store.set('Call', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Call entity without an ID");
        await store.remove('Call', id.toString());
    }

    static async get(id:string): Promise<Call | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Call entity without an ID");
        const record = await store.get('Call', id.toString());
        if (record){
            return this.create(record as CallProps);
        }else{
            return;
        }
    }


    static async getBySection(section: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'section', section);
      return records.map(record => this.create(record as CallProps));
      
    }

    static async getByMethod(method: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'method', method);
      return records.map(record => this.create(record as CallProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'timestamp', timestamp);
      return records.map(record => this.create(record as CallProps));
      
    }

    static async getBySignerId(signerId: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'signerId', signerId);
      return records.map(record => this.create(record as CallProps));
      
    }

    static async getByExtrinsicId(extrinsicId: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'extrinsicId', extrinsicId);
      return records.map(record => this.create(record as CallProps));
      
    }

    static async getByParentCallId(parentCallId: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'parentCallId', parentCallId);
      return records.map(record => this.create(record as CallProps));
      
    }


    static create(record: CallProps): Call {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
