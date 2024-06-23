import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaArrowDown } from 'react-icons/fa';
import { orange, grey } from '@mui/material/colors';

const FAQ = () => {
  return (
    <div className='my-container grid py-12 gap-10'>
      <h1 className='text-5xl  text-gradient text-center font-bold'>Still Have Questions?</h1>
      <p className='para py-2 text-3xl text-center'>Check out our FAQs.</p>
      <div className='two px-10 lg:px-20'>
        <div className='flex flex-col gap-5'>
          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                What is One Click Property?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              One Click Property is a platform where users can buy, sell, rent, or post ads for real estate properties. We provide a secure environment for users to connect and transact directly with each other.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                How do I post an ad on your website?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To post an ad, simply create an account and navigate to the "Post Ad" button in navbar and click Create Listing button. Fill in the required details about your property, upload images, and submit your ad for approval.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                Is my personal information safe on your website?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, your personal information is safe with us. We do not use cookies to track your information. Any personal information we collect is kept secure and confidential. We do not share your information with third parties without your consent, except as required by law.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel4-content"
              id="panel4-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                Do you charge any fees for posting ads?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We offer free and premium ad posting options. Free ads have basic visibility, while premium ads have enhanced visibility and features to attract more potential buyers or renters. The details of premium options are available on our "Pricing" page.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel5-content"
              id="panel5-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                How can I contact a seller or landlord?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Each ad has a contact form or contact details provided by the seller or landlord. You can use these to get in touch directly and discuss the property.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel6-content"
              id="panel6-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                Are financial transactions handled on your website?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No, we are not involved in any financial transactions between users. All buying, selling, or renting transactions are conducted directly between users. We do not accept any responsibility for transactions or disputes arising from such transactions.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel7-content"
              id="panel7-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                How can I ensure the legitimacy of a property listing?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We recommend verifying the property details and visiting the property in person before making any commitments. You can also check the seller's or landlord's ratings and reviews on our platform for additional assurance.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel8-content"
              id="panel8-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                What should I do if I encounter a fraudulent ad or seller?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                If you encounter a fraudulent ad or seller, please report it to us immediately using our email or contact details. Our team will investigate and take appropriate action.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel9-content"
              id="panel9-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                How often are ads updated or removed?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ads are updated regularly by the users. Expired or inactive ads are automatically removed after a certain period to ensure our listings are current and relevant.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ paddingY: '10px' }}>
            <AccordionSummary
              expandIcon={<FaArrowDown className='text-green-400' />}
              aria-controls="panel10-content"
              id="panel10-header"
            >
              <Typography sx={{ fontSize: '18px', color: grey[700] }}>
                How can I edit or delete my ad?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To edit or delete your ad, log in to your account and navigate to the "Show my Listing" section. Here, you can make changes to your existing ads or remove them if they are no longer available.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
