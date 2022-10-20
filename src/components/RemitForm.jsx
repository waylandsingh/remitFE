import React from 'react'


// consider breaking things down into more components for readability :D

const RemitForm = () => {
    return (

        <div class="container mx-auto">
            <div class="flex flex-row flex-wrap py-4">
                <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
                    <div class="sticky top-0 p-4 w-full">
                        {/* turn these into buttons which show/hide different parts of the form ?*/}
                        <ul class="flex flex-col overflow-hidden">
                            ☑ Sender Information
                        </ul>
                        <ul class="flex flex-col overflow-hidden">
                            ☑ Recipient Information
                        </ul>
                        <ul class="flex flex-col overflow-hidden">
                            ☑ Bank Information
                        </ul>
                        <ul class="flex flex-col overflow-hidden">
                            ☑ Confirm Information
                        </ul>
                    </div>
                </aside>
                <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                    <form className="flex flex-col pb-20">
                    {/* break these into components that are rendered individually from object with data*/}
                        <label className="flex flex-col pb-2 ">
                            First Name:
                        <input type="text" name="senderFirstName" />
                        </label>
                        <label className="flex flex-col pb-2 ">
                            Last Name:
                        <input type="text" name="senderLastName" />
                        </label>
                        <label className="flex flex-col pb-2 ">
                            Country of Origin:
                        <input type="text" name="originCountry" />
                        </label>
                        <label className="flex flex-col pb-2 ">
                            Destination:
                        <input type="text" name="destinationCountry" />
                        </label>
                        <label className="flex flex-col pb-2 ">
                            First Name:
                        <input type="text" name="recipientFirstName" />
                        </label>
                        <label className="flex flex-col pb-2">
                            Last Name:
                        <input type="text" name="recipientLastName" />
                        </label>
                        <label className="flex flex-col pb-2">
                            Amount:
                        <input type="text" name="transactionAmount" />
                        </label>
                        <input type="submit" value="Submit" className={`border-2 border-white hover:bg-sky-700 hover:cursor-pointer`}/>
                    </form>
                </main>
            </div>
        </div>
        
    )
}

export default RemitForm
