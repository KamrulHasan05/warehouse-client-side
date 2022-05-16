import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <section className='blog py-4 py-md-5'>
            <div className="container">
                <div className="row pt-5 g-3">

                    {/* Column-1 */}
                    <div className="col-lg-4 col-md-6">

                        <div className="shadow-sm blog-content ">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>what is the Difference between javascript and nodejs?</h4>

                            {/* Table */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>JavaScript</th>
                                        <th>Node Js</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>javascript is a programming language is JavaScript. It works in any browser that has a suitable browser engine. Generally used for any client-side action in a web application, such as potential attribute validation or refreshing the page at a set interval, or providing certain dynamic changes in web pages without refreshing the page. Any JavaScript engine, such as Spider Monkey (FireFox), JavaScript Core (Safari), or V8 (Internet Explorer), may run JavaScript (Google Chrome).</td>

                                        <td>Node js is a JavaScript interpreter and environment with several essential libraries that JavaScript developers can use individually. It is primarily used for accessing or conducting any non-blocking operating system action, such as writing or executing a shell script, getting hardware-specific information, or running any backend job. rately. Only the V8 engine, which is mostly used by Google Chrome, can execute Node JS. And any javascript programs developed with Node JS will always run in the V8 Engine.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    </div>

                    {/* Column-2 */}
                    <div className="col-lg-4 col-md-6">

                        <div className="shadow-sm blog-content ">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>When should I use Nodejs and MongoDb?</h4>

                            {/* Table */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Node Js</th>
                                        <th>MongoDb</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Any project requires a programming environment and a runtime library that can build and understand your code and provides basic programming tools and assistance. Nodejs is a tool for programming in the Javascript language. Other languages with comparable tools include Python, Java, PHP, C#, C++, Go, and so on. So, if you want to develop a Javascript standalone program or server, you may utilize nodejs.</td>

                                        <td>If your application requires the capacity to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize a database. There are a slew of well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have different strengths and new methods of being used, thus choosing the right/best database for what you're doing is a whole different topic.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                    </div>

                    {/* Column-3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="shadow-sm blog-content">
                            {/* Question */}
                            <h4 className='fw-normal mb-3 text-center text-md-start'>What is the purpose of jwt and how does it work?</h4>
                            <div className="answer-part">
                                <p className='mb-3'>JWTs are an excellent way to securely communicate information between parties since they can be signed, ensuring that the senders are who they claim to be. Furthermore, the format of a JWT allows you to check for tampering with the content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Blog;