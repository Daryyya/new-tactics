import { NextPage } from 'next'
import React from 'react'
import Layout from '@/components/layout/Layout'
import PolicyPage from '@/components/screens/policy/PolicyPage'

const Policy: NextPage = () => {
  return (
    <>
    <Layout title='Политика конфиденциальности'>
      <PolicyPage />
    </Layout>
    </>
  )
}

export default Policy