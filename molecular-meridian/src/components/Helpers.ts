export const getIcon = (skill: string) => {
    let formatted = skill.toLowerCase().replaceAll(".", "").replaceAll(" ","").replaceAll("#", "sharp").replaceAll("+", "plus")
    if (formatted === "aspnetcore") formatted = "dotnetcore"
    else if (formatted === "shell") formatted = "bash"
    else if (formatted === "html") formatted = "html5"
    else if (formatted === "css") formatted = "css3"
    if (formatted === "express") return "devicon-express-original"
    return `devicon-${formatted}-plain`
}