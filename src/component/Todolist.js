import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'; 
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import { Card, CardContent, Typography, ListItem, ListItemButton, ListItemText, Checkbox, 
TextField, Button, IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Todolist = () => {
  const { date } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(`todos_${date}`)) || [];
    setTodos(storedTodos);
  }, [date]);


  useEffect(() => {
    localStorage.setItem(`todos_${date}`, JSON.stringify(todos));
  }, [todos, date]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        text: inputValue,
        id: Date.now(),
      };
      const updatedTodos = [...todos, { ...newTodo }];
      setTodos(updatedTodos);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card
        sx={{
          maxWidth: 750,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <IconButton
            sx={{ color: "#5a4eb9" }}
            onClick={handleBackClick}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flex: 1,
              textAlign: "center",
              color: "#5a4eb9",
              fontWeight: "bold",
            }}
          >
            To Do List for {date}
          </Typography>
        </Box>
        <CardContent>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <TextField
              label="Add New To Do"
              color="secondary"
              focused
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              sx={{ flex: 1, height: "50px" }}
            />
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              color="secondary"
              onClick={handleAddTodo}
              sx={{ height: "50px" }}
            >
              ADD
            </Button>
          </div>

          <List
            sx={{
              maxHeight: "300px",
              overflow: "auto",
              paddingTop: "10px",
              borderTop: "1px solid #ddd",
              padding: "0",
            }}
          >
            {todos.map((todo) => (
              <ListItem
                key={todo.id}
                sx={{
                  borderBottom: "1px solid #ddd",
                  paddingY: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ListItemButton>
                  <Checkbox
                    edge="start"
                    disableRipple
                    color="secondary"
                  />
                  <ListItemText primary={todo.text} />
                </ListItemButton>
                <IconButton
                  onClick={() => handleDeleteTodo(todo.id)}
                  sx={{ color: "#e57373" }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Todolist;
