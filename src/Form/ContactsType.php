<?php

namespace App\Form;

use App\Entity\Contacts;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'Prénom',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre prénom',                   
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre prénom',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre prénom doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre prénom ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9\s,.\'-]{3,}$/'
                        ,
                        'message' => 'Votre prénom ne peut contenir que des lettres',
                    ]),
                ],
            ])
            
            ->add('lastname', TextType::class, [
                'label' => 'Nom',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre nom',                   
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre nom',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre nom doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre nom ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9\s,.\'-]{3,}$/',
                        'message' => 'Votre nom ne peut contenir que des lettres',
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre email',                   
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre email',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre email doit faire au moins {{ limit }} caractères',
                        'max' => 50,
                        'maxMessage' => 'Votre email ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern'=> '/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/',
                        'message' => 'Votre email n\'est pas valide',
                    ]),
                ],
            ])
            ->add('phone', TelType::class, [
                'label' => 'Téléphone',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre numéro de téléphone',                   
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre numéro de téléphone',
                    ]),
                    new Length([
                        'min' => 10,
                        'minMessage' => 'Votre numéro de téléphone doit faire au moins {{ limit }} caractères',
                        'max' => 10,
                        'maxMessage' => 'Votre numéro de téléphone ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^((\+)33|0|0033)[1-9](\d{2}){4}$/'
                        ,
                        'message' => 'Votre numéro de téléphone ne peut contenir que des chiffres',
                    ]),
                ],
            ])            
            ->add('subject', ChoiceType::class, [
                'label' => 'Sujet',
                'choices' => [
                    'Demande de devis SEO' => 'Demande de devis SEO',
                    'Demande de devis Shopify' => 'Demande de devis Shopify',
                    'Demande de devis création de site internet (site vitrine)' => 'Demande de devis création de site internet (site vitrine)',
                    'Ou tout simplement nous contacter' => 'Ou tout simplement nous contacter',
                ],
                'required' => true,
                // 'attr' => [
                //     'placeholder' => 'Merci de mentionner l\'objet de votre message',                   
                // ],
                // 'constraints' => [
                //     new NotBlank([
                //         'message' => 'Veuillez renseigner l\'objet de votre message',
                //     ]),
                //     new Length([
                //         'min' => 2,
                //         'minMessage' => 'Votre sujet doit faire au moins {{ limit }} caractères',
                //         'max' => 100,
                //         'maxMessage' => 'Votre sujet ne peut pas faire plus de {{ limit }} caractères',
                //     ]),
                //     new Regex([
                //         'pattern' => '/^[a-zA-Z0-9\s,.\'-]{3,}$/',
                //         'message' => 'L\'objet de votre message n\'est pas valide',
                //     ]),
                // ],
            ])
            ->add('message', TextAreaType::class, [
                'label' => 'Message',
                'required' => true,
                'attr' => [
                    'placeholder' => 'Votre message',                   
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez renseigner votre message',
                    ]),
                    new Length([
                        'min' => 2,
                        'minMessage' => 'Votre message doit faire au moins {{ limit }} caractères',
                        'max' => 1000,
                        'maxMessage' => 'Votre message ne peut pas faire plus de {{ limit }} caractères',
                    ]),
                    new Regex([
                        'pattern' => '/^[a-zA-Z0-9\s,.\'-]{3,}$/',
                        'message' => 'Votre message n\'est pas valide',
                    ]),
                ],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => [
                    'class' => 'btn btn-primary',
                ],
            ])
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contacts::class,
        ]);
    }
}
