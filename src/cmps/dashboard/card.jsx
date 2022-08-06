import Card from 'react-bootstrap/Card';

export const CardDetails = ({ header, title, subTitle, subTitle2, title2, text, color }) => {

   return (
      <>
         {[color
            // 'Primary',
            // 'Secondary',
            // 'Success',
            // 'Danger',
            // 'Warning',
            // 'Info',
            // 'Light',
            // 'Dark',
         ].map((variant) => (
            <Card
               bg={variant.toLowerCase()}
               key={variant}
               text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
               style={{ width: '11rem' }}
               className="mb-2"
            >
               <Card.Header>{header}</Card.Header>
               <Card.Body>
                  <Card.Title>{title} <span style={{ fontSize: 14 }}>{subTitle}</span></Card.Title>
                  <Card.Title>{title2 && title2} <span style={{ fontSize: 14 }}>{subTitle2}</span></Card.Title>
                  <Card.Text>
                     {text}
                  </Card.Text>
               </Card.Body>
            </Card>
         ))}
      </>
   );
}
