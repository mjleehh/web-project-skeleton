import cppBinary from './main.cpp'

async function main() {
    const cppModule = await cppBinary.init(imports => {
        return imports
    })
    console.log(cppModule.exports.fib(11))
}

main()