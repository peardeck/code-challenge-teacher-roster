import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// Imports static md data from the /students directory and converts it to a useable format
const studentsDirectory = path.join(process.cwd(), 'students')

export function getSortedStudentsData() {
  // Get file names under /students
  const fileNames = fs.readdirSync(studentsDirectory)
  const allStudentsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(studentsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the student metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort classroms by name
  return allStudentsData.sort((a, b) => {
    if (a.name < b.name) {
      return 1
    } else {
      return -1
    }
  })
}
export function getAllStudentIds() {
  const fileNames = fs.readdirSync(studentsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getStudentData(id) {
  const fullPath = path.join(studentsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the student metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}