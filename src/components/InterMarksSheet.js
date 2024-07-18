import React, { useRef } from 'react'

function InterMarksSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef= useRef();
    let sansInputRef = useRef();
    let engInputRef = useRef();
    let mathsaInputRef = useRef();
    let mathsbInputRef = useRef();
    let PhyInputRef = useRef();
    let cheInputRef = useRef();
    let resultParaRef = useRef();

    let firsNameInputRef = useRef();
    let lastsNameInputRef = useRef();
    let sanInputRef = useRef();
    let engsInputRef = useRef();
    let maths2aInputRef = useRef();
    let maths2bInputRef = useRef();
    let physicsInputRef = useRef();
    let chemistryInputRef = useRef();
    let physicsPracticalInputRef = useRef();
    let chemistryPracticalInputRef = useRef();
    let resultParasRef = useRef();

  return (
    <div>
        < form className='form'>
            <h1 className='mainHeding'>Inter Results</h1>
            <fieldset>
                <legend>Inter First Year</legend>
            <div className='formDiv'>
                <label className='formLabel'>FirstName</label>
                <input type='text' ref={firstNameInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>LastName</label>
                <input type='text' ref={lastNameInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Sanskrit</label>
                <input type='Number' ref={sansInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>English</label>
                <input type='Number' ref={engInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-1A</label>
                <input type='Number' ref={mathsaInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-1B</label>
                <input type='Number' ref={mathsbInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics</label>
                <input type='Number' ref={PhyInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry</label>
                <input type='Number' ref={cheInputRef}></input>
            </div>
            
            <p ref={resultParaRef}>Please Enter Values and Click Calculate</p>
            </fieldset>
            <div className='formDiv'>
                <button type='button' onClick={()=>{
                    let firstName = firstNameInputRef.current.value;
                    let lastName = lastNameInputRef.current.value;
                    let sanMarks = Number(sansInputRef.current.value);
                    let engMarks =  Number(engInputRef.current.value);
                    let mathsaMarks =  Number(mathsaInputRef.current.value);
                    let mathsbMarks =  Number(mathsbInputRef.current.value);
                    let pyhMarks =  Number(PhyInputRef.current.value);
                    let cheMarks =  Number(cheInputRef.current.value);
                    

                    let totalMarks = sanMarks+engMarks+mathsaMarks+mathsbMarks+pyhMarks+cheMarks;
                    // alert(sansInputRef.current.value);
                    // sansInputRef.current.value=959595959;
                    // sansInputRef.current.style.backgroundColor = "red";
                     
                    // alert(`Total Marks are ${totalMarks}`);
                    resultParaRef.current.innerHTML =`${firstName} ${lastName} got total Marks are ${totalMarks}`;
                    // console.log("veeresh");
                }}>Calculate Result</button>
            </div>
        
        
        <fieldset>
            <legend>Inter Second Year</legend>
            <div className='formDiv'>
                <label className='formLabel' >FirstName</label>
                <input type='text' ref={firsNameInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>LastName</label>
                <input type='text'ref={lastsNameInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Sanskrit</label>
                <input type='number' ref={sanInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>English</label>
                <input type='number' ref={engsInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-2A</label>
                <input type='number' ref={maths2aInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Maths-2B</label>
                <input type='number' ref={maths2bInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics</label>
                <input type='number' ref={physicsInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry</label>
                <input type='number' ref={chemistryInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Physics Practical</label>
                <input type='number' ref={physicsPracticalInputRef}></input>
            </div>
            <div className='formDiv'>
                <label className='formLabel'>Chemistry Practical</label>
                <input type='number' ref={chemistryPracticalInputRef}></input>
            </div>
            <p ref={resultParasRef}>Please Enter Values and Click Calculate</p>
            </fieldset>
            <div className='formDiv'>
                <button type='button' onClick={()=>{
                    let firsName= firsNameInputRef.current.value;
                    let lasName =lastsNameInputRef.current.value;
                    let sanName =Number(sanInputRef.current.value);
                    let engsName = Number(engsInputRef.current.value);
                    let math2a =Number(maths2aInputRef.current.value);
                    let maths2b = Number(maths2bInputRef.current.value);
                    let physics =Number(physicsInputRef.current.value);
                    let chemistry =Number(chemistryInputRef.current.value);
                    let phyPractical = Number(physicsPracticalInputRef.current.value);
                    let chePractical = Number(chemistryPracticalInputRef.current.value);
                    
                    
                   let totalMarks2 =sanName+engsName+math2a+maths2b+physics+chemistry
                   +phyPractical+chePractical;

                   resultParasRef.current.innerHTML =`${firsName} ${lasName} got total Marks are ${totalMarks2}`;
                    // alert(`Total Marks are ${totalMarks2}`);
                    // alert("totalMarks2");
                }}>Calculte Results</button>
            </div>
        </form>
    </div>
  )
}

export default InterMarksSheet