import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {loadStripe} from '@stripe/stripe-js'
import API from '../services/API'
import classes from './Donation.module.css'
import Layout from '../components/shared/Layout'


const Donation = () => {
    const [amount,setAmount] = useState("")
    const [name,setName] = useState("")
    const makeDonation = async(e) =>{
       // e.preventDefault();
        if(amount !== "" && name !== ""){

        
        const stripe = await loadStripe("pk_test_51PmoAa09sDQQ2I0UYTeQBTuP5QDDmCaRWGOileb3i5wMTxyHLEdb4J234aBUmc1yL8hg5FW9ZVUslr2AhZObJIsb00eukwFMDn")
    
    
        const headers = {
            "Content-Type" : "application/json"
        }
        const response = await API.post("/admin/donation", {amount,name})
        console.log(response)
        const result = stripe.redirectToCheckout({
            sessionId: response.data.sessionId, 
        })
        if ((await result).error) {
            console.log((await result).error)
        }
    }
    
    }
  return (
    <Layout>
        <main className={classes.App }>
       {/*  <Button onClick={makeDonation}>Donate</Button> */}
       <section className={classes.HelpUs}>
       <header className={classes.HelpUsTitle}>
    <h1>Help us do more</h1>
  </header>
      <p className={classes.HelpUsParagraph}>
        We'll get right to the point: we're asking you to support us. We're a
        nonprofit that relies on support from people like you. If everyone
        reading this gives $10 monthly, we can thrive for years.
      </p>
    </section>
        <form className={classes.DonationForm} onSubmit={e => e.preventDefault()}>
      
    <div className={classes.SelectAmount}>
      <header className={classes.Title}>
        <h4>Selct amount</h4>
      </header>
      <fieldset className={classes.Amounts}>
        <div className={classes.RadioWrapper}>
          <input
            
            className={classes.Radio}
            type='radio'
            name='amount'
            checked={amount === "10"}
            value="10" onChange={(e) => setAmount(e.target.value)}
            id='10'
          />
          <label htmlFor='10'>$10</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' id='50' name='amount' value='50' checked={amount === "50"} onChange={(e) => setAmount(e.target.value)}/>
          <label htmlFor='50'>$50</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='100' value='100'checked={amount === "100"} onChange={(e) => setAmount(e.target.value)} />
          <label htmlFor='100'>$100</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='150' value='150'checked={amount === "150"} onChange={(e) => setAmount(e.target.value)} />
          <label htmlFor='150'>$150</label>
        </div>
        <div className={classes.RadioWrapper}>
          <input className={classes.Radio} type='radio' name='amount' id='200' value='200' checked={amount === "200"} onChange={(e) => setAmount(e.target.value)}/>
          <label htmlFor='200'>$200</label>
        </div>
        
      </fieldset>
      
    </div>
    <fieldset className={classes.NameInputWrapper}>
    <label htmlFor='amount-input'>Amount</label>
    <input
      className={classes.NameInput}
      type='text'
      id='amount-input'
      value={amount} 
      disabled
    />

  </fieldset>
    <fieldset className={classes.NameInputWrapper}>
    <label htmlFor='name-input'>Name</label>
    <input
      className={classes.NameInput}
      type='text'
      id='name-input' required
      value={name} onChange={(e) => setName(e.target.value)}
      placeholder='Enter your name'
    />

  </fieldset>
  <button className={classes.DonateButton} onClick={makeDonation}>Donate now</button>
    {/*   <SelectAmount />
      <Agreement />
      <NameInput />
      <SubmitButton /> */}
    </form>
    </main>
    </Layout>
  )
}

export default Donation
