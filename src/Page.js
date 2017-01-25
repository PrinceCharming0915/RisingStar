import React from 'react'
import { FormattedMessage } from 'react-intl'

import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './components/Introduction'
import Conclusion from './components/Conclusion'
import graphFactory from './components/graphFactory'
import categories from './categories'

class Page extends React.Component {
  render () {
    const { entities, url, projects, intl } = this.props
    // console.info('Render Page', entities);
    const locale = intl.locale
    const factory = graphFactory({ projects, entities, locale })
    const Graph = (props) => factory.createGraph(props)
    return (
      <div>
        <Header language={intl.locale} />
        <div id="picture-block">
          <div className="container">
            <h1>
              <FormattedMessage id="header.title" />
            </h1>
          </div>
        </div>
        <Introduction
          entities={entities}
          url={url}
          intl={intl}
        />
        {categories.map((item, i) => (
          <Graph
            key={item.tag}
            tag={item.tag}
            number={i + 1}
            title={item.title}
            excluded={item.excluded}
            count={item.count}
          />
        ))}
        <Conclusion
          entities={entities}
          url={url}
          intl={intl}
        />
        <Footer language={intl.locale} />
      </div>
    )
  }
}

export default Page
