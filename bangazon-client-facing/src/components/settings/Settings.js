import React from 'react';
import './Settings.css'

// needs to receive the payment types as an argument
export default () => {
	return (
		<article>
      <details className="w-70-ns w-100 pt2">
        <summary className="pointer dim">
            <h2 className='f5-ns f6 fw3 underline'>
                Payment Options
            </h2>
        </summary>
        <div className="f6">
            <a className="pointer dim blue" href='/add/paymenttype' title="Add Payment Type Form">
              Add a Payment Type
            </a>
          	<p>Payment Type 1</p>
          	<p>Payment Type 2</p>
        </div>
      </details>
	  </article>
	)
}