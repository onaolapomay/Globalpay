import React from 'react'
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

const Transactions = () => {
  const transactions = [
    { id: 1, date: '2025-09-12', amount: 56000, description: 'POS purchase on Jumia Store', status: 'Completed', type: 'debit' },
    { id: 2, date: '2025-09-10', amount: 27000, description: 'Incoming Payment from Moniepoint Services', status: 'Pending', type: 'credit' },
    { id: 3, date: '2025-09-08', amount: 45000, description: 'Ifitness Inc', status: 'Completed', type: 'debit' },
    { id: 4, date: '2025-09-05', amount: 309000, description: 'Paystack Transfer to Temu', status: 'Failed', type: 'debit' },
    { id: 5, date: '2025-09-01', amount: 600000, description: 'September Salary Credit- GOOGLE payroll Department', status: 'Completed', type: 'credit' },
    { id: 6, date: '2025-09-28', amount: 7500, description: 'Payment to CafeOne', status: 'Completed', type: 'debit' },
    { id: 7, date: '2025-09-25', amount: 15000, description: 'WEB Buy on CDcare', status: 'Pending', type: 'debit' },
    { id: 8, date: '2025-09-22', amount: 4500, description: 'Netflix Premium Subscription - POS Payment', status: 'Completed', type: 'debit' },
    { id: 10, date: '2025-09-15', amount: 50000, description: 'Bola sent you', status: 'Completed', type: 'credit' },
    { id: 11, date: '2025-09-14', amount: 200, description: 'Electronic Money Transfer Levy', status: 'Completed', type: 'debit' },
  ]

  return (
    <div>
      <h1 className='text-2xl font-bold mb-6'>Transactions</h1>

      <div className='space-y-4'>
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className='flex items-center justify-between bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition'
          >
            {/* Icon + Description */}
            <div className='flex items-center gap-4'>
              {txn.type === 'credit' ? (
                <ArrowUpCircle size={28} className='text-green-500' />
              ) : (
                <ArrowDownCircle size={28} className='text-red-500' />

              )}

              <div>
                <p className='font-semibold text-gray-800'>{txn.description}</p>
                <p className='text-sm text-gray-500'>{txn.date}</p>
              </div>
            </div>

            {/* Amount + Status */}
            <div className='text-right'>
              <p
                className={`text-lg font-bold ${
                  txn.type === 'credit' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                ₦{txn.amount.toLocaleString()}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  txn.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : txn.status === 'Pending'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {txn.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transactions