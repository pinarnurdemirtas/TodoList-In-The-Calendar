import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs'; 

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format('YYYY-MM-DD'); 
    setSelectedDate(formattedDate);
    navigate(`/todo/${formattedDate}`); 
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          marginTop: "80px",
          fontWeight: "bold",
          color: "#5a4eb9",
        }}
      >
        Todo In The Calendar
      </Typography>
      <Box
        sx={{
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 450,
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            background: "linear-gradient(135deg, #9b8ffb 30%, #dbc4ff 90%)",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 15px 25px rgba(0, 0, 0, 0.4)",
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                color: "#ffffff",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              Select a Date
            </Typography>
            <Box
              sx={{
                border: "2px solid #ffffff",
                borderRadius: "12px",
                padding: "10px",
                backgroundColor: "#f4f4ff",
              }}
            >
              {!selectedDate ? (
                <DateCalendar onChange={handleDateChange} />
              ) : null} 
            </Box>
          </CardContent>
        </Card>
      </Box>
    </LocalizationProvider>
  );
};

export default Calender;
