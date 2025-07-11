const model = "gemini-2.5-flash"
const templates = ['template1', 'template2']
const name_template = ['Simples moderno', 'Simples']



module.exports = {
    gemini : {
        MODEL: model
    },
    pdf : {
        AVAILABLE_TEMPLATES: templates,
        PAPER_SIZE: "A4",
        ENCRYPT_TYPE: "utf-8",
        LOAD_PAGE: "networkidle0",
        NAME_TEMPLATES: name_template
    }
}