
import home from '../style/imgs/home.svg'
import flight_1 from '../style/imgs/flight_1.png'
import flight_2 from '../style/imgs/flight_2.png'
import flight_3 from '../style/imgs/flight_3.png'
import flight_4 from '../style/imgs/flight_4.png'


export const AppHome = () => {

   return (
      <section className="app-home">
         {/* <img src="https://www.electra-elevators.co.il/filestock/img/img_1500448530577-6.jpg" alt="" /> */}

         <h1 style={{backgroundColor: '#152d66', width: '100%', color: '#FFF'}}>Flights in israel</h1>
         <h3 style={{backgroundColor: '#152d66', width: '100%', color: '#FFF'}}>Get all data about your flight</h3>
         <h3 style={{backgroundColor: '#152d66', width: '100%', color: '#FFF'}}>(Base on data from israel airport only)</h3>
         <br />

         <h5 style={{textDecoration: 'underline'}}>Database updating duration</h5>
         <h5 >History and Dashboard tabs every 30 min</h5>
         <h5>Online board tab every 15 min</h5>
         <br />
         <p style={{backgroundColor: 'tomato', width: '100%', color: '#FFF'}}>Please do not rely on the results shown, even though the data is indeed correct, I cannot guarantee it. The project was built and presented for personal practice.</p>

         <div className="links">
            <a href="https://linkedin.com/in/eran-avichzer" target="_blank" ><img align="center"
               src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
               alt="eran-avichzer" height="70" width="40" /></a>

            <a href="https://github.com/EranAAA" target="_blank"><img align="center"
               src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
               alt="eran-avichzer" height="60" width="40" /></a>
         </div>

         <div className="screens">
            <br />
            <h2>Screenshots</h2>

            <img src={flight_1} alt="" />
            <img src={flight_2} alt="" />

            <hr />
            <h5>Example for flight 6H 531 with ISRAIR AIRLINES: </h5>
            <h5>We can see all the flight history and learn that this flight keeps delaying each flight!</h5>

            <img src={flight_3} alt="" />
            <img src={flight_4} alt="" />
         </div>

      </section>
   )
}

