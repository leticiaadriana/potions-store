import { useState } from "react";

function DeleteForms() {
  const [id, setID] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5001/api/pocoes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar poção");
      }

      const data = await response.json();
      alert("Poção deletada com sucesso!");
      console.log(data);

      setID("");
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar!");
    }
  }

  return (
    <>
      <h2>Deletar poção</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label>ID:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setID(e.target.value)}
          required
        />

        <button type="submit" style={{ marginTop: "15px" }}>
          Deletar
        </button>
      </form>
    </>
  );
}

export default DeleteForms;
