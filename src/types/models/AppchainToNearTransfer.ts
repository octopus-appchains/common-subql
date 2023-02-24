// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export type AppchainToNearTransferProps = Omit<AppchainToNearTransfer, NonNullable<FunctionPropertyNames<AppchainToNearTransfer>>>;

export class AppchainToNearTransfer implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public sequence?: number;

    public bridgeMessageEventId?: string;

    public senderId?: string;

    public receiver?: string;

    public type?: string;

    public assetId?: number;

    public amount?: bigint;

    public collection?: bigint;

    public item?: bigint;

    public fee?: bigint;

    public timestamp?: Date;

    public extrinsicId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save AppchainToNearTransfer entity without an ID");
        await store.set('AppchainToNearTransfer', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove AppchainToNearTransfer entity without an ID");
        await store.remove('AppchainToNearTransfer', id.toString());
    }

    static async get(id:string): Promise<AppchainToNearTransfer | undefined>{
        assert((id !== null && id !== undefined), "Cannot get AppchainToNearTransfer entity without an ID");
        const record = await store.get('AppchainToNearTransfer', id.toString());
        if (record){
            return this.create(record as AppchainToNearTransferProps);
        }else{
            return;
        }
    }


    static async getBySequence(sequence: number): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'sequence', sequence);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByBridgeMessageEventId(bridgeMessageEventId: string): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'bridgeMessageEventId', bridgeMessageEventId);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getBySenderId(senderId: string): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'senderId', senderId);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByReceiver(receiver: string): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'receiver', receiver);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByType(type: string): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'type', type);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByAssetId(assetId: number): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'assetId', assetId);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByAmount(amount: bigint): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'amount', amount);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByCollection(collection: bigint): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'collection', collection);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'timestamp', timestamp);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }

    static async getByExtrinsicId(extrinsicId: string): Promise<AppchainToNearTransfer[] | undefined>{
      
      const records = await store.getByField('AppchainToNearTransfer', 'extrinsicId', extrinsicId);
      return records.map(record => this.create(record as AppchainToNearTransferProps));
      
    }


    static create(record: AppchainToNearTransferProps): AppchainToNearTransfer {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new this(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
