import React, { useState } from 'react';
import './Plan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faWeight, faHandHoldingWater, faAmbulance, faHeadSideMask, faMedkit, faDiagnoses, faHiking} from '@fortawesome/free-solid-svg-icons';



const cards = {
    faAppleAlt: {
       iconImg: faAppleAlt,
       h3: 'Diabetes Meal Plan',
       p: 'A meal plan is your guide for when, what, and how much to eat to get the nutrition you need while keeping your blood sugar levels in your target range. A good meal plan will consider your goals, tastes, and lifestyle, as well as any medicines your taking.'
    },

    faWeight: {
       iconImg: faWeight,
       h3: 'Healthy Weight',
       p: 'First, what does “healthy weight” mean to you? Is it the weight you think you should be? We cant provide an exact number for you personally, but we can give you some pointers on how to get to a weight that healthy for you and stay there.'
    },

    faHiking: {
        iconImg: faHiking,
        h3: 'Get Active',
        p: 'Physical activity is very important for people with diabetes! Good news its not as hard as you might think to be more active.',
        a: 'http.www'
    },
    
    faHandHoldingWater: {
        iconImg: faHandHoldingWater,
        h3: 'Manage Blood Sugar',
        p: 'Its important to keep your blood sugar levels in your target range as much as possible to help prevent or delay long-term, serious health problems, such as heart disease, vision loss, and kidney disease.',
        a: 'http.www'
    },
    
    faHeadSideMask: {
        iconImg: faHeadSideMask,
        h3: 'Managing Sick Days',
        p: 'These tips can help people with diabetes prepare for getting sick and take care of themselves if they do become ill.',
        a: 'http.www'
    },

    faDiagnoses: {
        iconImg: faDiagnoses,
        h3: 'Prevention Tips',
        p: 'Even though diabetes can lead to other health problems, you can prevent or delay these complications in many ways.Learn how to prevent or delay these diabetes complications and how to improve overall health.',
        a: 'http.www'
    },
    
    faMedkit: {
        iconImg: faMedkit,
        h3: 'Disease Care Schedule',
        p: 'Theres a lot to do to manage diabetes, from daily care you do yourself to lab tests and visits with your health care team.Use this list to stay on schedule with self-checks, exams, and appointments throughout the year.',
        a: 'http.www'
    },

    faAmbulance: {
        iconImg: faAmbulance,
        h3: 'Diabetes Emergencies',
        p: 'Managing diabetes can be hard during a major storm, loss of electricity, or infectious disease outbreaks. Plan ahead so that you can manage your diabetes during times of emergency.',
        a: 'http.www'
    }

}

const Plan = () => {

   const [pageNumber, setPageNumber] = useState(0);

 //In one page consists of 4 items to be calculated
    let itemPerpage = 4;

 //Calculate the length of the cards and the value of itemPerpage which is 4 
    let totalPage = Object.keys(cards).length/itemPerpage;

    const switchPage = (index) => {
        setPageNumber(index);
    }

  //Calculate the item in one page using slice 
    let cardDisplay = Object.keys(cards).slice(pageNumber*itemPerpage, (pageNumber*itemPerpage)+itemPerpage).map(item => {
        return(
            <div className="card-container">
               <div key={item} className="card-box">
                  <FontAwesomeIcon  className="plan-icon" icon={cards[item]['iconImg']}/>
                  <h3>{cards[item]['h3']}</h3>
                  <p>{cards[item]['p']}</p>
                  <button className="plan-btn"><a href={cards[item]['a']} rel="noopener" target="_blank">Read More</a></button>
               </div>
            </div>
        )
    })


    //Create Page of array and for loop
    let page = [];
    for (let i = 0; i < totalPage; i++){
        page.push(i);
    }
    
    let pagination = page.map(item => {
        return(
            <div style={pageNumber === item ? {backgroundColor: 'var(--color-primary)'} : null} className='plan-button' onClick={() =>switchPage(item)}></div>
        )
    })

    return(
        <>
            <div className="plan-container" id="plan">
              <div className="plan-content-box">
                  <h1 className="plan-title">Diabetes Tips and Recommendation</h1>
                  <p className="plan-para">Showing diabetes tips and recommendation for prevention of Type 2 Diabetes Mellitus Disease.</p>
              </div>
               {cardDisplay}
           </div>
           <div className="plan-pagination">
               {pagination}
           </div>
        </>
    );
}
export default Plan;