class Page {

    path: string
  
    constructor(path: string) {
        this.path = path
    }
  
    open(): void {
        cy.visit(this.path)
    }
  
    ignoreFailure(): void {
        cy.on("fail", (err, runnable) => {
            console.log(err.message)
            return false
        })
    }

}
  
export default Page