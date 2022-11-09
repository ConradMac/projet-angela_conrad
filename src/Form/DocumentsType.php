<?php

namespace App\Form;

use App\Entity\Documents;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\VarDumper\Cloner\Data;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class DocumentsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            
            ->add('description')
            ->add('ui_ux', FileType:: class,[
                'multiple' => false,
                'data_class' => null,
                'label' => ' Si UX/ UI',
                'mapped' => true,
                'required' => false,
                'empty_data' => '',
                'constraints' => [
                    new File([

                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'application/pdf',
                            'application/x-pdf',
                            'application/doc',
                            'application/fig',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid PDF, document, Figma file',
                    ])
                ],
            ])
            ->add('seo', FileType:: class,  [
            'multiple' => false,
            'data_class' => null,
                'label' => '  Si SEO (texte à placer par page)',
                
                'mapped' => true,
                'required' => false,
                'empty_data' => '',
               
           
            ])
            ->add('image_service', FileType:: class, [
            'multiple' => false,
            'data_class' => null,
                'label' => 'Si images à fournir des produits',
                'mapped' => true,
                'required' => false,
                'empty_data' => '',
                'constraints' => [
                    new File([
                        'maxSize' => '1024k',
                        'mimeTypes' => [
                            'application/pdf',
                            'application/x-pdf',
                            'application/doc',
                            'application/fig',
                        ],
                        'mimeTypesMessage' => 'Please upload a valid PDF, document, Figma file',
                    ])
                ],
            ])
            // ->add('users', IntegerType:: class, [
            
            //     'label' => 'users',
            //     'mapped' => true,
            //     'required' => false,
            // ])
            // ->add('services', FileType:: class, [
            //     'multiple' => false,
            //     'data_class' => null,
            //     'label' => 'services',
            //     'mapped' => true,
            //     'required' => false,
            //     'empty_data' => '',
            //     'constraints' => [
            //         new File([
            //             'maxSize' => '1024k',
            //             'mimeTypes' => [
            //                 'application/pdf',
            //                 'application/x-pdf',
            //                 'application/doc',
            //                 'application/fig',
            //             ],
            //             'mimeTypesMessage' => 'Please upload a valid PDF, document, Figma file',
            //         ])
            //     ],
            // ])
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer',
                'attr' => [
                    'class' => 'btn btn-primary'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Documents::class,
        ]);
    }
}
