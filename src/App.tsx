import Dashboard from './components/Dashboard/Dashboard'
import Layout from './components/Layout'
import { LocationProvider } from './Contexts/LocationContext'
import { ThemeProvider } from './Contexts/ThemeContext'
import { WeatherProvider } from './Contexts/WeatherContext'

function App() {

  return (
    <>
      <ThemeProvider>
        <LocationProvider>
          <WeatherProvider>
            <Layout>
              <Dashboard/>
            </Layout>
          </WeatherProvider>
        </LocationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
