import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

export const getListOfProjects = () => {
  // loop through list of md files 
  const folder = path.join(process.cwd(), 'app','DevProjects')
  const files = fs.readdirSync(folder) // returns array of file names
  const mdFiles = files.filter(file => file.endsWith('.md'))

  return mdFiles.map(filename => {
    // --> pull in content of each file
    const contents = fs.readFileSync(path.join(folder, filename), 'utf8')
    // --> pass content into matter function to get data
    const { data } = matter(contents)

    // --> package up the frontmatter with the 'slug' into our object
    return {
      ...data,
      slug: filename.replace('.md', '')
    } 
    // --> --> add object to an array and RETURN the array of objects
  })
}

export const getProjectContent = (slug) => {
  const file = path.join(process.cwd(), 'app', 'DevProjects', slug) + '.md'
  const content = fs.readFileSync(file, 'utf8')
  return matter(content) // separate the Markdown string into content and frontmatter.
}

