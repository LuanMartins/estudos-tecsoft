import { Component, OnInit } from '@angular/core';
import { AlunosService } from './../alunos.service';
import { Aluno } from './Aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {


  public dadosAlunos: Array<any>;
  public aluno: Aluno = new Aluno();
  constructor(private servicoAluno: AlunosService) {
    // passando os dados de aluno para a visão do componente
    servicoAluno.getAlunos().subscribe((data: any) => this.dadosAlunos = data);
    
    
   }

  ngOnInit() {
  }

  public setarNoForm(value){

    this.aluno.name = value.name;
    this.aluno.price = value.price;
    this.aluno.type = value.type;

  }

  public mostrarValor(){

    console.log(this.aluno.name);
  }

  public criarAluno(){

    
    
    this.servicoAluno.CreateAlunos(this.aluno).subscribe(

      res =>{
        console.log(res);
      },

      err =>{
        console.log(err)
      }
    )

  }

  public deletarAluno(id){

    console.log(id);
    this.servicoAluno.deleteAlunos(id).subscribe(

      res =>{
        console.log(res);
      },

      err => {

        console.log(err);
      }
    )

  }

  public atualizarAlunos(value){
    console.log(value.id);
    this.servicoAluno.updateAlunos(value)
      .subscribe(
        res => {
            console.log(res);
        },

        err => {
          console.log(err);  
        }
      )
  }

}
