const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")
let count = 1

function writingNote(text) {
  const noteDir = path.join("./", "notes")
  const notePath = path.join(noteDir, `${count < 10 ? `0${count}` : count}-notas`)
  count++
  
  if(!fs.existsSync(noteDir)) fs.mkdirSync(noteDir)

  fs.writeFileSync(notePath, text, "utf-8")
  
  console.log("\n------------------------------------------")
  console.log("Nota salva")
  console.log("------------------------------------------\n")
}

function readingNote(num) {
  try {
    const filePath = path.resolve("./notes", `${num}-notas`)
    const readFile = fs.readFileSync(filePath, "utf-8")
    console.log("\n------------------------------------------")
    console.log(readFile)
    console.log("------------------------------------------\n")
  } catch {
    console.log("\n------------------------------------------")
    console.log("Arquivo nao foi encontrado")
    console.log("------------------------------------------\n")
  }
}

function deleteNote(num) {
  try {
    const filePath = path.resolve("./notes", `${num}-notas`)
    fs.unlinkSync(filePath)
    console.log("\n------------------------------------------")
    console.log("Nota deletada")
    console.log("------------------------------------------\n")
  } catch {
    console.log("\n------------------------------------------")
    console.log("Arquivo nao foi encontrado")
    console.log("------------------------------------------\n")
  }
}

function showAllNotes() {
  const notes = fs.readdirSync("./notes")
  if(notes.length > 0) {
    console.log("\n------------------------------------------")
    notes.forEach(note => console.log(`Nota: ${note}`))
    console.log("------------------------------------------\n")
  } else {
    console.log("\n------------------------------------------")
    console.log("Nenhuma nota salva")
    console.log("------------------------------------------\n")
  }
}
 
function askNote(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

  return new Promise((resolve) => {
    rl.question(question, (anwser) => {
      resolve(anwser)
      rl.close()
    })
  })
}

async function useInteraction() {
  const choice = await askNote("\nInsira qual operacao ira escolher: ")
  let anwser = ""
  switch(choice) {
    case "1":
      anwser = await askNote("Digite o que deseja salvar nas notas: ")
      writingNote(anwser)
      showQuestions()
    break
    case "2":
      anwser = await askNote("Digite o numero da nota que deseja ver o conteudo: ")
      readingNote(anwser)
      showQuestions()
    break
    case "3":
      anwser = await askNote("Digite o numero da nota que deseja excluir: ")
      deleteNote(anwser)
      showQuestions()
    break
    case "4":
      showAllNotes(anwser)
      showQuestions()
    break
    case "5":
      process.exit()
    default: 
      console.log("Comando Invalido")
      showQuestions()
  }
}

function Initialize() {
  console.log("------------------------------------------")
  console.log("Notas Rápidas no Terminal v1.0")
  console.log("------------------------------------------")
  showQuestions()
}

function showQuestions() {
  console.log("1 - Adicionar novas notas \n2 - Ver uma nota especifica \n3 - Excluir uma nota \n4 - Ver todas as notas salvas \n5 - Sair")
  useInteraction()
}

Initialize()