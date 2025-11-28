import { useState } from 'react'
import { InputBox } from './component'
import useCurrency from './hook/useCurrency'
function App() {
  const [amount, setAmount] = useState("")
  const [form, setForm] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrency(form)
  const currencyOptions = Object.keys(currencyInfo)

  const swapCurrency = () => {
    setForm(to)
    setTo(form)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvMT7_zdPDsX1mku49cFSulwnVPplYtxgbQ&s')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}                          //ja;sdlfj;lkdjf
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setForm(currency)}
                selectedCurrency={form}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="submit"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Convert {form.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button type="button" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={swapCurrency}>
              swap
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
