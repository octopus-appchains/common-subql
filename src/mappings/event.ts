import {
  SubstrateBlock,
  SubstrateExtrinsic,
  SubstrateEvent,
} from '@subql/types'
import { Event } from '../types'
import _ from 'lodash'

export async function handleEvent(
  block: SubstrateBlock,
  event: SubstrateEvent,
  extrinsic: SubstrateExtrinsic
) {
  const newEvent = new Event(`${block.block.header.number}-${extrinsic.idx}`)
  newEvent.index = Number(event.event.index)
  newEvent.section = event.event.section
  newEvent.method = event.event.method
  newEvent.data = JSON.stringify(event.event.data.toHuman())

  newEvent.blockId = block.block.header.hash.toString()
  newEvent.extrinsicId = `${block.block.header.number}-${extrinsic.idx}`

  await newEvent.save()
}
