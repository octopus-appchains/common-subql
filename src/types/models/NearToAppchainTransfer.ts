// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type NearToAppchainTransferProps = Omit<NearToAppchainTransfer, NonNullable<FunctionPropertyNames<NearToAppchainTransfer>>>;

export class NearToAppchainTransfer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public sequence?: number;

    public sender?: string;

    public receiverId?: string;

    public type?: string;

    public assetId?: number;

    public amount?: bigint;

    public collection?: bigint;

    public item?: bigint;

    public timestamp?: Date;

    public extrinsicId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save NearToAppchainTransfer entity without an ID");
        await store.set('NearToAppchainTransfer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove NearToAppchainTransfer entity without an ID");
        await store.remove('NearToAppchainTransfer', id.toString());
    }

    static async get(id:string): Promise<NearToAppchainTransfer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get NearToAppchainTransfer entity without an ID");
        const record = await store.get('NearToAppchainTransfer', id.toString());
        if (record){
            return this.create(record as NearToAppchainTransferProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'sequence', sequence);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getBySender(sender: string): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'sender', sender);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByReceiverId(receiverId: string): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'receiverId', receiverId);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByType(type: string): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'type', type);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByAssetId(assetId: number): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'assetId', assetId);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByAmount(amount: bigint): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'amount', amount);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByCollection(collection: bigint): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'collection', collection);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByItem(item: bigint): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'item', item);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'timestamp', timestamp);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }

    static async getByExtrinsicId(extrinsicId: string): Promise<NearToAppchainTransfer[] | undefined>{
      
      const records = await store.getByField('NearToAppchainTransfer', 'extrinsicId', extrinsicId);
      return records.map(record => this.create(record as NearToAppchainTransferProps));
      
    }


    static create(record: NearToAppchainTransferProps): NearToAppchainTransfer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
