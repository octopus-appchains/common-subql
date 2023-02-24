import { SubstrateBlock } from '@subql/types'
import { Block } from '../types'

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const newBlock = new Block(block.block.header.hash.toString())
  newBlock.number = block.block.header.number.toBigInt() || BigInt(0)
  newBlock.timestamp = block.timestamp
  newBlock.parentHash = block.block.header.parentHash.toString()
  newBlock.specVersion = block.specVersion
  await newBlock.save()
}

export { handleTransfer } from './handleTransfer'
export { handleAppchainToNearAccount } from './handleAppchainToNearAccount'
export { handleNearToAppchainAccount } from './handleNearToAppchainAccount'
