
import './App.css'
import WeatherForm from './components/WeatherForm'

function App() {
  

  return (
    <>
      <section>
        <WeatherForm onSubmit={function (city: string): void {
          throw new Error('Function not implemented.')
        } }/>
    
      </section>
    </>
  )
}

export default App
