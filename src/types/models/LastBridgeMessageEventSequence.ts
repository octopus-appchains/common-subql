// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type LastBridgeMessageEventSequenceProps = Omit<LastBridgeMessageEventSequence, NonNullable<FunctionPropertyNames<LastBridgeMessageEventSequence>>| '_name'>;

export class LastBridgeMessageEventSequence implements Entity {

    constructor(
        
            id: string,
        
        
    ) {
        
            this.id = id;
        
    }


    public id: string;

    public sequence?: number;


    get _name(): string {
        return 'LastBridgeMessageEventSequence';
    }

    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save LastBridgeMessageEventSequence entity without an ID");
        await store.set('LastBridgeMessageEventSequence', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove LastBridgeMessageEventSequence entity without an ID");
        await store.remove('LastBridgeMessageEventSequence', id.toString());
    }

    static async get(id:string): Promise<LastBridgeMessageEventSequence | undefined>{
        assert((id !== null && id !== undefined), "Cannot get LastBridgeMessageEventSequence entity without an ID");
        const record = await store.get('LastBridgeMessageEventSequence', id.toString());
        if (record){
            return this.create(record as LastBridgeMessageEventSequenceProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<LastBridgeMessageEventSequence[] | undefined>{
      
      const records = await store.getByField('LastBridgeMessageEventSequence', 'sequence', sequence);
      return records.map(record => this.create(record as LastBridgeMessageEventSequenceProps));
      
    }


    static create(record: LastBridgeMessageEventSequenceProps): LastBridgeMessageEventSequence {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(
        
            record.id,
        );
        Object.assign(entity,record);
        return entity;
    }
}
