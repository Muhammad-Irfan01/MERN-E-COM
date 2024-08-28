import {FOOTER_LINKS, FOOTER_LINKS2} from '../assets/footer_links'
import { Link } from 'react-router-dom'
import {FOOTER_CONTACT} from '../assets/footer_contact'
import { SOCIALS } from '../assets/socials'

const  Footer = () => {
  return (
    <footer className='flex flex-col py-16'>
      
              <h1 className='p-5 text-2xl sm:text-3xl font-semibold py-12'>Shoppee</h1>

      <div className='flex sm:justify-around p-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2'>
        <div>
            {FOOTER_LINKS.map((data, index) =>(
            <div key={index}>
              <p className='text-lg md:text-xl font-bold'>{data.title}</p>
              <ul className='flex flex-col'>
                  {data.links.map((link) => (
                    <Link className='mt-3 text-sm sm:text-lg md:mt-5' to={'/'} key={link}>{link}</Link>
                  ))}
              </ul>
            </div>
              ))}
               
        </div>

        
        <div>
            {FOOTER_LINKS2.map((item, index) =>(
              <div key={index}>
                  <p className='text-lg md:text-xl font-bold'>{item.title}</p>
                  <ul>
                    {item.links.map((link) =>(
                      <li className='mt-3 text-sm sm:text-lg md:mt-5' key={link}>{link}</li>
                    ))}
                  </ul>
              </div>
            ))}
        </div>

        <div className='py-8 md:py-0'>
          {FOOTER_CONTACT.map((value, index) =>(
            <div key={index}>
                <p className='font-bold text-lg md:text-xl'>{value.title}</p>
                {value.links.map((link) =>(
                  <p className='' key={link}>{link.label} : {link.value}</p>
                ))}
            </div>
          ))}
        </div>

        <div className='py-8 lg:py-0'>
          {SOCIALS.map((data, index) =>(
              <Link to={'/'} key={index} className='flex flex-col'>
                <p className='font-semibold text-lg md:text-xl'>{data.title}</p>
                <div className='flex py-3 sm:gap-4'>

                {data.links.map((link) =>(
                  <img className='flex' key={link} src={link} height={30} width={30} alt="Social-Links" />
                ))}
                </div>
                
              </Link>
          ))}
        </div>
      </div>
      <div className='w-full border-t-2 border-slate-100 flex justify-center'>
        <p className='text-center text-slate-500 pt-10'>2024 Shoppee | All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer