import React from 'react'
import Card, { CardVariant } from './components/Card'

export const App = () => {
  return (
    <div>
      <Card onClick={(num: number) => console.log('qq', num)} variant={CardVariant.primary} width='300px' height='300px'>
        <button>Knock</button>
        <div>asdasd</div>
        </Card>
      </div>
  )
}
