import { Account } from '../types'
import { isEqual } from 'lodash'
import { getAccount } from './utils/api'

export async function createAccount({
  accountId,
  timestamp,
}: {
  accountId: string
  timestamp: Date
}): Promise<void> {
  const {
    nonce,
    data: { free, reserved, miscFrozen, feeFrozen },
  } = await getAccount(accountId)
  const record = Account.create({
    id: accountId,
    nonce: Number(nonce.toString()),
    freeBalance: free.toBigInt(),
    reservedBalance: reserved.toBigInt(),
    miscFrozenBalance: miscFrozen.toBigInt(),
    feeFrozenBalance: feeFrozen.toBigInt(),
    createdAt: timestamp,
  })
  await record.save()
}

export async function syncAccount(account: Account) {
  const prevAccount = { ...account }
  const {
    nonce,
    data: { free, reserved, miscFrozen, feeFrozen },
  } = await getAccount(account.id)
  account.nonce = nonce
  account.freeBalance = free.toBigInt()
  account.reservedBalance = reserved.toBigInt()
  account.miscFrozenBalance = miscFrozen.toBigInt()
  account.feeFrozenBalance = feeFrozen.toBigInt()

  if (!isEqual(prevAccount, account)) {
    account.save()
  }
}
