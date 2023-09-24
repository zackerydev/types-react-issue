import { useState } from 'react'
import { Disclosure, Listbox } from '@headlessui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Disclosure>
        <Disclosure.Button className="py-2">
          Is team pricing available?
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          Yes! You can purchase a license that you can share with your entire
          team.
        </Disclosure.Panel>
      </Disclosure>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <Listbox value={'test'} onChange={() => 'test'}>
      <Listbox.Button>{'test'}</Listbox.Button>
      <Listbox.Options>
          <Listbox.Option
            key={'asdf'}
            value="Test"
          >
          Test
          </Listbox.Option>
      </Listbox.Options>
    </Listbox>
    </>
  )
}

export default App
