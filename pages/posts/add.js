import Layout from "@/components/Layout";
import Alert from 'react-bootstrap/Alert'
import useTranslation from 'next-translate/useTranslation'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { API_URL } from "@/config/index";

export default function AddPostPage({ token }) {
    const { t, lang } = useTranslation('common')
    const [title, setTitle] = useState("");
    const [show, setShow] = useState(false);
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const { locale, locales } = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (e) => {
        const myPost = { data: { title, slug, description,locale} }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(myPost)
        };

        
        const response = await fetch(`${API_URL}/api/posts`, requestOptions);
        const post = await response.json()
        if (!response.ok) {
            console.error('Something Went Wrong'), {
            };
            return
        }
        else {
         console.log("Record has been added")
         setShow(true)
         
        }
    }
    return (

            <Container className='mt-3 mb-3' dir={locale === 'ur-PK' ? 'rtl' : 'ltr'}>
                <Row>
               
                    <p className="h1 mt-2" style={{ 'fontWeight': 'bolder' }}>&nbsp;{t('common:addPost')}</p>
                    <hr></hr>
                    <Col md={12} >
                    <Alert  style={{width:"40em",textAlign:"center"}} show={show} variant="success"  onClose={() => setShow(false)} dismissible>آپ کی پو  سٹ  ایڈ ھو گئ ھے</Alert>  
                        <Card className='bg-light pb-3' style={{ width: '70%', 'text-align': 'left' }}>
                            <Card.Body>
                                <Form onSubmit={handleSubmit(onSubmit)} >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                      
                                        <Form.Control type="text" placeholder={t("common:formTitle")} value={title}
                                            {...register("title", { required: true })}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        {errors.title && <p className="text-danger">Title is required</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                      
                                        <Form.Control type="text" placeholder={t("common:formSlug")} value={slug}
                                            {...register("slug", { required: true })}
                                            onChange={(e) => setSlug(e.target.value)}
                                        />
                                        {errors.slug && <p className="text-danger">Slug is required</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            as="textarea"
                                            placeholder={t("common:formDescripton")}
                                            style={{ height: '400px' }}
                                            value={description}
                                            {...register("description", { required: true })}
                                            onChange={(e) => setDescription(e.target.value)}

                                        />
                                        {errors.title && <p className="text-danger">Description is required</p>}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    </Form.Group>
                                    <div className="d-grid gap-2">
                                    <Button varient='primary' size="lg" type="submit">
                                       {t('common:submitPost')}
                                    </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
     


    )

};