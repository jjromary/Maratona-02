module.exports = {
    remainingDays(job) {

        //cálculo do tempo restante
        const remainingDays = (job["total-hours"]/job["daily-hours"]).toFixed()
    
        const creatdDate = new Date(job.created_at)
        const dueDay = creatdDate.getDate() + Number(remainingDays)
        const dueDateInMs = creatdDate.setDate(dueDay)
    
        const timeDiffInms = dueDateInMs - Date.now()
    
        //transformar millisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInms / dayInMs)
    
        //restam X dias
        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}