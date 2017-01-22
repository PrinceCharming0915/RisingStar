import React from 'react'

import Markdown from './Markdown'
import items from './items'
import Social from './Social'
import { FormattedMessage } from 'react-intl'
import md from '../../content/introduction'

const Introduction = ({ entities, url, intl }) => (
  <div className="container container-section small-container">
    <div className="small-card markdown-body card-introduction">
      <Markdown source={md[intl.locale].body} entities={entities} />
      <hr />
      <h3>
        <FormattedMessage
          id="introduction.table_of_contents"
        />
      </h3>
      <ol>
        {items.map((item, i) => (
          <li key={item.tag}>
            <a href={`#${item.tag}`}>
            {`${item.title}`}
            </a>
          </li>
        ))}
      </ol>
      <hr />
      <div>
        <Social
          url={url}
          text={'Check the JavaScript landscape in 2016'}
        />
      </div>
      <hr />
      <small>
        <p style={{marginTop: '1rem'}}>
          <FormattedMessage
            id="introduction.explanation"
            defaultMessage={`
              We analyzed projects coming from {link},
            a curated list of the best projects related to the web platform.
            `}
            values={{ link: <a href="http://bestof.js.org/hof/">bestof.js.org</a> }}
          />
        </p>
      </small>
    </div>
  </div>
)

export default Introduction
