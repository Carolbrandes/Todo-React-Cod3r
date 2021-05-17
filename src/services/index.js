import axios from "axios";

const baseUrl = "http://localhost:3000";

export async function getAllStatus() {
  const res = await axios.get(`${baseUrl}/status`);
  return res;
}

export async function getTodos() {
  const res = await axios.get(`${baseUrl}/todos`);
  return res;
}

export async function setTodos(todo) {
  await axios.post(`${baseUrl}/todos`, todo);
}
