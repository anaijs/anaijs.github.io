import React from 'react'
import ReactDOM from 'react-dom'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'

import { BaseProvider } from 'baseui'
import reportWebVitals from './reportWebVitals'
import { Display } from 'baseui/typography'
import { theme } from './components/common/theme'
import { Header } from './components/common/header'
import { BrowserRouter } from 'react-router-dom'

const engine = new Styletron()

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <BrowserRouter>
          <Header />
          {/* <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/profile"><Profile /></Route>
      </Switch> */}

          <Display>Xin chào thế giới</Display>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
