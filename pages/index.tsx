import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto width-full flex flex-col align-center lg:text-xl text-sm text-center">
      <h2>How are you feeling right now?</h2>
      <div className="flex justify-center gap-3 ">{Array.from(Array(10).keys()).map(number => (<button key={number} className="border-solid rounded border-black border-2 p-3">{number}</button>))}</div>
      <h2>How itchy do you feel?</h2>
      <div className="flex justify-center gap-3">{Array.from(Array(10).keys()).map(number => (<button key={number} className="border-solid rounded border-black border-2 p-3">{number}</button>))}</div>
      <hr/>
      <h2>How healthy was your breakfast?</h2>
      <div className="flex text-xl justify-center gap-3">{Array.from(["Unhealthy", "Average", "Healthy"]).map(health => (<button key={health} className="border-solid rounded border-black border-2 p-3">{health}</button>))}</div>
      <h2>How healthy was your lunch?</h2>
      <div className="flex text-xl justify-center gap-3">{Array.from(["Unhealthy", "Average", "Healthy"]).map(health => (<button key={health} className="border-solid rounded border-black border-2 p-3">{health}</button>))}</div>
      <h2>How healthy was your dinner?</h2>
      <div className="flex text-xl justify-center gap-3">{Array.from(["Unhealthy", "Average", "Healthy"]).map(health => (<button key={health} className="border-solid rounded border-black border-2 p-3">{health}</button>))}</div>
    </div>
  )
}

export default Home
