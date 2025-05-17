"use client"
import React, { useState } from 'react'
import './couple-form.css'
import Image from 'next/image'
import coupleImage from "../../Images/couple.png"
const CoupleForm = () => {
    const [ageFrom, setAgeFrom] = useState(18);
    const [ageTo, setAgeTo] = useState(40);

    // Handle From input manually
    const handleFromChange = (e) => {
        const value = Number(e.target.value);
        setAgeFrom(value);
        if (value > ageTo) setAgeTo(value); // optional logic
    };

    // Handle To input manually
    const handleToChange = (e) => {
        const value = Number(e.target.value);
        setAgeTo(value);
    };

    // Only update TO when slider moves
    const handleSliderChange = (e) => {
        const value = Number(e.target.value);
        setAgeTo(value);
    };
    return (
        <>
            <section className='couple-form'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="couple-form-left">
                                <h1>Your true love starts here.</h1>
                                <p>Join the dating site where you could meet anyone, anywhere!</p>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label d-block fw-bold">I am:</label>
                                        <div className="btn-group" role="group">
                                            <input type="radio" className="btn-check" name="iam" id="iam-man" autoComplete="off" defaultChecked />
                                            <label className="btn custom-radio-btn" htmlFor="iam-man">Man</label>

                                            <input type="radio" className="btn-check" name="iam" id="iam-woman" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="iam-woman">Woman</label>

                                            <input type="radio" className="btn-check" name="iam" id="iam-nonbinary" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="iam-nonbinary">Nonbinary</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label d-block fw-bold">Interested In:</label>
                                        <div className="btn-group" role="group">
                                            <input type="radio" className="btn-check" name="interested" id="interested-man" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="interested-man">Man</label>

                                            <input type="radio" className="btn-check" name="interested" id="interested-woman" autoComplete="off" defaultChecked />
                                            <label className="btn custom-radio-btn" htmlFor="interested-woman">Woman</label>

                                            <input type="radio" className="btn-check" name="interested" id="interested-nonbinary" autoComplete="off" />
                                            <label className="btn custom-radio-btn" htmlFor="interested-nonbinary">Nonbinary</label>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Age</label>
                                        <div className="d-flex gap-2 mb-2">
                                            <div className="d-grid">
                                                <label htmlFor="ageFrom">From</label>
                                                <input
                                                    id="ageFrom"
                                                    type="number"
                                                    className="couple-form-input"
                                                    min="18"
                                                    max="100"
                                                    value={ageFrom}
                                                    onChange={handleFromChange}
                                                />
                                            </div>
                                            <div className="d-grid">
                                                <label htmlFor="ageTo">To</label>
                                                <input
                                                    id="ageTo"
                                                    type="number"
                                                    className="couple-form-input"
                                                    min="18"
                                                    max="100"
                                                    value={ageTo}
                                                    onChange={handleToChange}
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="range"
                                            className="form-range"
                                            min="18"
                                            max="100"
                                            value={ageTo}
                                            onChange={handleSliderChange}
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Country</label>
                                        <select className="form-select">
                                            <option value="">Select Country</option>
                                            <option>Afghanistan</option>
                                            <option>Albania</option>
                                            <option>Algeria</option>
                                            <option>Andorra</option>
                                            <option>Angola</option>
                                            <option>Antigua and Barbuda</option>
                                            <option>Argentina</option>
                                            <option>Armenia</option>
                                            <option>Australia</option>
                                            <option>Austria</option>
                                            <option>Azerbaijan</option>
                                            <option>Bahamas</option>
                                            <option>Bahrain</option>
                                            <option>Bangladesh</option>
                                            <option>Barbados</option>
                                            <option>Belarus</option>
                                            <option>Belgium</option>
                                            <option>Belize</option>
                                            <option>Benin</option>
                                            <option>Bhutan</option>
                                            <option>Bolivia</option>
                                            <option>Bosnia and Herzegovina</option>
                                            <option>Botswana</option>
                                            <option>Brazil</option>
                                            <option>Brunei</option>
                                            <option>Bulgaria</option>
                                            <option>Burkina Faso</option>
                                            <option>Burundi</option>
                                            <option>Cabo Verde</option>
                                            <option>Cambodia</option>
                                            <option>Cameroon</option>
                                            <option>Canada</option>
                                            <option>Central African Republic</option>
                                            <option>Chad</option>
                                            <option>Chile</option>
                                            <option>China</option>
                                            <option>Colombia</option>
                                            <option>Comoros</option>
                                            <option>Congo (Congo-Brazzaville)</option>
                                            <option>Costa Rica</option>
                                            <option>Croatia</option>
                                            <option>Cuba</option>
                                            <option>Cyprus</option>
                                            <option>Czech Republic</option>
                                            <option>Denmark</option>
                                            <option>Djibouti</option>
                                            <option>Dominica</option>
                                            <option>Dominican Republic</option>
                                            <option>Ecuador</option>
                                            <option>Egypt</option>
                                            <option>El Salvador</option>
                                            <option>Equatorial Guinea</option>
                                            <option>Eritrea</option>
                                            <option>Estonia</option>
                                            <option>Eswatini</option>
                                            <option>Ethiopia</option>
                                            <option>Fiji</option>
                                            <option>Finland</option>
                                            <option>France</option>
                                            <option>Gabon</option>
                                            <option>Gambia</option>
                                            <option>Georgia</option>
                                            <option>Germany</option>
                                            <option>Ghana</option>
                                            <option>Greece</option>
                                            <option>Grenada</option>
                                            <option>Guatemala</option>
                                            <option>Guinea</option>
                                            <option>Guinea-Bissau</option>
                                            <option>Guyana</option>
                                            <option>Haiti</option>
                                            <option>Honduras</option>
                                            <option>Hungary</option>
                                            <option>Iceland</option>
                                            <option>India</option>
                                            <option>Indonesia</option>
                                            <option>Iran</option>
                                            <option>Iraq</option>
                                            <option>Ireland</option>
                                            <option>Israel</option>
                                            <option>Italy</option>
                                            <option>Jamaica</option>
                                            <option>Japan</option>
                                            <option>Jordan</option>
                                            <option>Kazakhstan</option>
                                            <option>Kenya</option>
                                            <option>Kiribati</option>
                                            <option>Kuwait</option>
                                            <option>Kyrgyzstan</option>
                                            <option>Laos</option>
                                            <option>Latvia</option>
                                            <option>Lebanon</option>
                                            <option>Lesotho</option>
                                            <option>Liberia</option>
                                            <option>Libya</option>
                                            <option>Liechtenstein</option>
                                            <option>Lithuania</option>
                                            <option>Luxembourg</option>
                                            <option>Madagascar</option>
                                            <option>Malawi</option>
                                            <option>Malaysia</option>
                                            <option>Maldives</option>
                                            <option>Mali</option>
                                            <option>Malta</option>
                                            <option>Marshall Islands</option>
                                            <option>Mauritania</option>
                                            <option>Mauritius</option>
                                            <option>Mexico</option>
                                            <option>Micronesia</option>
                                            <option>Moldova</option>
                                            <option>Monaco</option>
                                            <option>Mongolia</option>
                                            <option>Montenegro</option>
                                            <option>Morocco</option>
                                            <option>Mozambique</option>
                                            <option>Myanmar</option>
                                            <option>Namibia</option>
                                            <option>Nauru</option>
                                            <option>Nepal</option>
                                            <option>Netherlands</option>
                                            <option>New Zealand</option>
                                            <option>Nicaragua</option>
                                            <option>Niger</option>
                                            <option>Nigeria</option>
                                            <option>North Korea</option>
                                            <option>North Macedonia</option>
                                            <option>Norway</option>
                                            <option>Oman</option>
                                            <option>Pakistan</option>
                                            <option>Palau</option>
                                            <option>Palestine</option>
                                            <option>Panama</option>
                                            <option>Papua New Guinea</option>
                                            <option>Paraguay</option>
                                            <option>Peru</option>
                                            <option>Philippines</option>
                                            <option>Poland</option>
                                            <option>Portugal</option>
                                            <option>Qatar</option>
                                            <option>Romania</option>
                                            <option>Russia</option>
                                            <option>Rwanda</option>
                                            <option>Saint Kitts and Nevis</option>
                                            <option>Saint Lucia</option>
                                            <option>Saint Vincent and the Grenadines</option>
                                            <option>Samoa</option>
                                            <option>San Marino</option>
                                            <option>Sao Tome and Principe</option>
                                            <option>Saudi Arabia</option>
                                            <option>Senegal</option>
                                            <option>Serbia</option>
                                            <option>Seychelles</option>
                                            <option>Sierra Leone</option>
                                            <option>Singapore</option>
                                            <option>Slovakia</option>
                                            <option>Slovenia</option>
                                            <option>Solomon Islands</option>
                                            <option>Somalia</option>
                                            <option>South Africa</option>
                                            <option>South Korea</option>
                                            <option>South Sudan</option>
                                            <option>Spain</option>
                                            <option>Sri Lanka</option>
                                            <option>Sudan</option>
                                            <option>Suriname</option>
                                            <option>Sweden</option>
                                            <option>Switzerland</option>
                                            <option>Syria</option>
                                            <option>Taiwan</option>
                                            <option>Tajikistan</option>
                                            <option>Tanzania</option>
                                            <option>Thailand</option>
                                            <option>Timor-Leste</option>
                                            <option>Togo</option>
                                            <option>Tonga</option>
                                            <option>Trinidad and Tobago</option>
                                            <option>Tunisia</option>
                                            <option>Turkey</option>
                                            <option>Turkmenistan</option>
                                            <option>Tuvalu</option>
                                            <option>Uganda</option>
                                            <option>Ukraine</option>
                                            <option>United Arab Emirates</option>
                                            <option>United Kingdom</option>
                                            <option>United States</option>
                                            <option>Uruguay</option>
                                            <option>Uzbekistan</option>
                                            <option>Vanuatu</option>
                                            <option>Vatican City</option>
                                            <option>Venezuela</option>
                                            <option>Vietnam</option>
                                            <option>Yemen</option>
                                            <option>Zambia</option>
                                            <option>Zimbabwe</option>
                                        </select>

                                    </div>

                                    <button type="submit" className="btn w-100" style={{ backgroundColor: "#A16EFF", color: "white" }}>
                                        Find your partner
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6 text-end">
                            <div className="couple-form-right">
                                <Image src={coupleImage} alt="Couple Form" className="couple-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoupleForm