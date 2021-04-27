import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

// Imports static md data from the /classrooms directory and converts it to a useable format
const classroomsDirectory = path.join(process.cwd(), 'classrooms')

export function getSortedClassroomsData() {
  // Get file names under /classrooms
  const fileNames = fs.readdirSync(classroomsDirectory)
  const allClassroomsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(classroomsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the classroom metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort classroms by name
  return allClassroomsData.sort((a, b) => {
    if (a.name < b.name) {
      return 1
    } else {
      return -1
    }
  })
}
export function getAllClassroomIds() {
  const fileNames = fs.readdirSync(classroomsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'magic-school-bus'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'hard-knocks'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getClassroomData(id) {
  const fullPath = path.join(classroomsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the classroom metadata section
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