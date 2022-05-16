import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Checkbox } from '@mui/material';

interface Props {}

export const CardLayout: React.FC<Props> = (props) => {

    return(<>
    {
       <Card sx={{ maxWidth: 345, mb: 2, mt:5, mx: "auto", borderRadius: '16px' }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://s3-alpha-sig.figma.com/img/ccd2/e018/41b54f8069afba28221051e1bc437df1?Expires=1653264000&Signature=btwCQlw-uzmkTkzztysjH1vZiv5dW88nTqsQ5XJ~ViUiQy4CrICCpfPnmFsdy2qyIj1Qy6Tx4D9nBf7us3udoCR58AmsYfTd609mwfTT-SMcJwGK2aXFf8n1Rz73YTJfniyf7D~l2-iBfs3Tz2oJV6ojQECyHg7ISL95oe92v16UzASPuSJTW5ODdQWWH31lLA8oToTe2xELb6GNPDZVp5I3Jfn~fbD9WTottWBzWJWqwZI3opVZTPfpmZzuM9c1oTu6wI9aGQ-~kIMLeaUMpsWddTzFluq9P45z6vC4Ju3ZYMP1ZLMtUuH0ubWKPYE5UXPw1qbeHz9-wSMN8vwIiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="green iguana"
        />
        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
         <Box sx={{display: 'flex', alignItems: 'center'}}>  <Checkbox   />Flood zone 3</Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    }</>)

};